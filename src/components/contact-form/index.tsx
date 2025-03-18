import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, Mail, MapPin } from 'lucide-react'
import { DialogTitle } from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'

const formSchema = z.object({
    fullname: z.string().min(2, 'Full Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z
        .string()
        .length(10, 'Phone number must be exactly 10 digits')
        .regex(/^\d+$/, 'Phone number must contain only numeric values'),
    team: z.string().nonempty()
})

export default function ContactForm({
    setShowForm
}: {
    setShowForm: Function
}) {
    const [loading, setLoading] = useState(false)

    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            fullname: '',
            email: '',
            phone: '',
            team: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true)
        try {
            const payload = {
                fullname: values.fullname,
                email: values.email,
                phone: values.phone,
                data: { team: values.team }
            }
            await fetch(
                `${process.env.NEXT_PUBLIC_API_HOST}/v1/contact-forms/${process.env.NEXT_PUBLIC_SLUG}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }
            )
            setLoading(false)
            setShowForm(false)
            // return toast.success('Request submitted successfully')
        } catch (error) {
            setLoading(false)
            // return toast.error('Request could not be submit at this time')
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl">
            <div className="bg-primary text-white p-6 flex flex-col space-y-4 rounded-tl-lg rounded-bl-lg">
                <DialogTitle className="text-2xl font-bold text-white">
                    Get in Touch
                </DialogTitle>
                <p>
                    We're here to answer your questions and discuss how we can
                    help you and your loved ones.
                </p>
                <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>contact@360degreecare.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>27 Chestnut St, Ridgewood, NJ 07450</span>
                </div>
            </div>
            <div className="p-6 bg-white-bright rounded-tr-lg rounded-br-lg">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your full name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm mt-1" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm mt-1" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm mt-1" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="team"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Description of Requested Service
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe your request"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-sm mt-1" />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            variant="cta"
                            className={`w-full rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
