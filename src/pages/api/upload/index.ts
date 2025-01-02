import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { formidable } from "formidable";
import path, { join } from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(
  request: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("here is the reques", request);

    const form = formidable();
    const [fields, files] = await form.parse(request);
    const file1 = files.image?.[0];

    console.log("here is the file", files, file1);

    if (!file1) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const uploadDir = path.join(process.cwd(), "public/uploads");
    const timestamp1 = Date.now();
    const filename1 = `${timestamp1}-${file1.originalFilename}`;

    // Save main image
    const mainPath = path.join(uploadDir, filename1);
    await writeFile(mainPath, await readFile(file1.filepath));

    // Save thumbnail
    // const thumbPath = path.join(uploadDir, `thumb-${filename1}`);
    // await writeFile(thumbPath, await readFile(file1.filepath));

    return res.status(200).json({
      success: true,
      urls: {
        main: `/uploads/${filename1}`,
        //thumbnail: `/uploads/thumb-${filename1}`,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, error: "Upload failed" },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
