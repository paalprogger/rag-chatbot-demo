'use client'
import { CornerDownLeft, Mic, Paperclip } from 'lucide-react'
import { useChat } from 'ai/react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip'
import { Label } from '@/components/ui/label'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 3,
  })

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <div className="space-y-4">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              <div>
                <div className="font-bold">{m.role}</div>
                <p>
                  {m.content.length > 0 ? (
                    m.content
                  ) : (
                    <span className="italic font-light">
                      {'calling tool: ' + m?.toolInvocations?.[0].toolName}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1" />
        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
          x-chunk="dashboard-03-chunk-1"
        >
          <Label htmlFor="message" className="sr-only">
            Message
          </Label>
          <TooltipProvider>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              value={input}
              onChange={handleInputChange}
            />
            <div className="flex items-center p-3 pt-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="size-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Attach File</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Mic className="size-4" />
                    <span className="sr-only">Use Microphone</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Use Microphone</TooltipContent>
              </Tooltip>
              <Button type="submit" size="sm" className="ml-auto gap-1.5">
                Send Message
                <CornerDownLeft className="size-3.5" />
              </Button>
            </div>
          </TooltipProvider>
        </form>
      </div>
    </main>
  )
}
