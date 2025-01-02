import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(
  request: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const uploadDir = path.join(process.cwd(), "public/uploads");
    const files = await readdir(uploadDir);

    const images = files
      .filter((file) => file.endsWith(".webp"))
      .reduce((acc, file) => {
        const [timestamp] = file.split("-");
        acc.push({
          id: timestamp,
          url: `/uploads/${file}`,
          createdAt: new Date(parseInt(timestamp)).toISOString(),
        });
        return acc;
      }, [] as any[])
      .sort((a, b) => parseInt(b.id) - parseInt(a.id));

    console.log("here are the images", images);

    return res.status(200).json({
      success: true,
      images: images,
    });

    //return NextResponse.json({ images });
  } catch (error) {
    console.error("Failed to fetch images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
