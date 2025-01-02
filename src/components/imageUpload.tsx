"use client";

import React, { useState, useCallback } from "react";
import { CheckCircle, Upload } from "lucide-react";
import { UploadResponse } from "@/types/image";

interface ImageUploadProps {
  endpoint?: string;
  maxSize?: number;
  onUploadComplete?: (url: string) => void;
  onError?: (error: string) => void;
}

export default function ImageUpload({
  endpoint = "/api/upload",
  maxSize = 5 * 1024 * 1024, // 5MB
  onUploadComplete,
  onError,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const processImage = useCallback(async (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        // Calculate dimensions
        let width = img.width;
        let height = img.height;
        const maxDimension = 800;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        // Create canvas for resizing
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Failed to get canvas context"));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Failed to create blob"));
            }
          },
          "image/webp",
          0.8
        );
      };

      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = URL.createObjectURL(file);
    });
  }, []);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > maxSize) {
      onError?.(`File size exceeds ${maxSize / 1024 / 1024}MB limit`);
      return;
    }

    setUploading(true);
    setUploadSuccess(false);
    try {
      // Generate preview
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      // Process image
      const processedBlob = await processImage(file);

      // Create form data
      const formData = new FormData();
      formData.append(
        "image",
        processedBlob,
        file.name.replace(/\.[^/.]+$/, ".webp")
      );

      // Upload
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data: UploadResponse = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Upload failed");
      }

      onUploadComplete?.(data.url);
      setUploadSuccess(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Upload failed";
      onError?.(message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <label className="block mb-4">
        <div
          className={`relative border-2 border-dashed border-gray-300 rounded-lg p-8 
            text-center cursor-pointer hover:border-gray-400 transition-colors
            ${uploading ? "bg-gray-50" : ""}`}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleUpload}
            accept="image/*"
            disabled={uploading}
          />
          {uploadSuccess ? (
            <div className="flex flex-col items-center">
              <CheckCircle className="mx-auto mb-2 text-green-500" />
              <p className="text-green-600">Upload successful!</p>
            </div>
          ) : (
            <>
              <Upload className="mx-auto mb-2" />
              <p className="text-gray-600">
                {uploading ? "Processing..." : "Click or drag image to upload"}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Max size: {maxSize / 1024 / 1024}MB
              </p>
            </>
          )}
          {/* <Upload className="mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            {uploading ? "Processing..." : "Click or drag image to upload"}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Max size: {maxSize / 1024 / 1024}MB
          </p> */}
        </div>
      </label>

      {preview && (
        <div className="mt-4">
          <p className="mb-2 text-sm text-gray-600">Preview:</p>
          <img
            src={preview}
            alt="Upload preview"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
