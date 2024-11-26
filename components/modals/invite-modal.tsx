"use client"

import { Check, Copy, RefreshCw } from "lucide-react"
import { useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/dialog"
import { useModal } from "@/hooks/use-modal-store"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useOrigin } from "@/hooks/use-origin"

export const InviteModal = () => {
    const { isOpen, onClose, type, data } = useModal()
    const origin = useOrigin()

    const isModalOpen = isOpen && type === "invite"
    const { server } = data

    const [copied, setCopied] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const inviteUrl = `${origin}/invite/${server?.inviteCode}`

    const onCopy = () => {
        navigator.clipboard.writeText(inviteUrl)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Invite Friends
                    </DialogTitle>
                </DialogHeader>
                <div className="p-6">
                    <Label className="uppercase text-sm font-bold text-zinc-500 dark:text-secondary/70">
                        Server invite link
                    </Label>
                    <div className="flex items-center mt-2 gap-x-2">
                        <Input
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                            value={inviteUrl}
                        />
                        <Button
                            onClick={onCopy}
                            size="icon"
                        >
                            {copied
                                ? <Check className="w-4 h-4" />
                                : <Copy className="w-4 h-4" />
                            }

                        </Button>
                    </div>
                    <Button
                        variant="link"
                        size="sm"
                        className="text-sm text-zinc-500 mt-4"
                    >
                        Generate a new link
                        <RefreshCw className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}