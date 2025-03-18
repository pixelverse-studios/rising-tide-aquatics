import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import ContactForm from './contact-form'
import ContactSuccessMessage from './contact-form/success-msg'

interface CallToActionProps {
    buttonLabel: string
    buttonClass?: string
    round?: boolean
    variant: any
}

export default function CallToAction({
    buttonLabel,
    buttonClass,
    round,
    variant
}: CallToActionProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [showForm, setShowForm] = useState(true)

    useEffect(() => {
        return () => {
            setShowForm(true)
        }
    }, [])

    return (
        <Dialog
            open={isOpen}
            onOpenChange={open => {
                setIsOpen(open)
                if (!open) setTimeout(() => setShowForm(true), 1000)
            }}
        >
            <DialogTrigger asChild>
                <Button
                    variant={variant}
                    className={cn(buttonClass, round ? 'shadow-xl' : '')}
                >
                    {buttonLabel}
                </Button>
            </DialogTrigger>
            <DialogContent
                aria-describedby="contact-form-modal"
                className="mx-auto p-0 border-none max-w-4xl w-[calc(100%-3rem)] shadow-lg"
            >
                <AnimatePresence mode="wait">
                    {showForm ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <ContactForm setShowForm={setShowForm} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <ContactSuccessMessage />
                        </motion.div>
                    )}
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    )
}
