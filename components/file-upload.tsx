"use client"

import { useState } from "react"
import Image from "next/image"
import { FileIcon, X } from "lucide-react"

import { UploadDropzone } from "@/lib/uploadthing"

// import "@uploadthing/react/styles.css"

interface FileUploadProps {
    onChange: (url?: string, fileType?: string) => void
    value: string
    fileType?: string
    endpoint: "messageFile" | "serverImage"
}

export const FileUpload = ({
    onChange,
    value,
    fileType,
    endpoint,
}: FileUploadProps) => {

    if (value && fileType !== "application/pdf") {
        return (
            <div className="relative h-20 w-20">
                <Image
                    fill
                    src={value}
                    alt="Upload"
                    className="rounded-full"
                />
                <button
                    onClick={() => onChange("")}
                    className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
                    type="button"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        )
    }

    if (value && fileType === "application/pdf") {
        return (
            <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
                <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
                <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
                >
                    file.pdf
                </a>
                <button
                    onClick={() => onChange("")}
                    className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
                    type="button"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        )
    }

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                if (res?.[0]) {
                    onChange(res[0].url, res[0].type)
                }
                
            }}
            onUploadError={(error: Error) => {
                console.log(error)
            }}
        />
    )
}