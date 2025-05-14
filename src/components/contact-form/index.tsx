import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, Mail, MapPin } from 'lucide-react'
import { DialogTitle } from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { ripple, breakers, surges, tsunami } from '@/lib/teams'

// Define type for form with team
interface FormWithTeam {
    fullname: string
    email: string
    phone: string
    team: string
}

// Define type for form without team
interface FormWithoutTeam {
    fullname: string
    email: string
    phone: string
}

// Create schemas matching the interfaces
const withTeamSchema = z.object({
    fullname: z.string().min(2, 'Full Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z
        .string()
        .length(10, 'Phone number must be exactly 10 digits')
        .regex(/^\d+$/, 'Phone number must contain only numeric values'),
    team: z.string().nonempty()
})

const withoutTeamSchema = z.object({
    fullname: z.string().min(2, 'Full Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z
        .string()
        .length(10, 'Phone number must be exactly 10 digits')
        .regex(/^\d+$/, 'Phone number must contain only numeric values')
})

export default function ContactForm({
    setShowForm,
    hideSelect = false
}: {
    setShowForm: Function
    hideSelect?: boolean
}) {
    const [loading, setLoading] = useState(false)

    // Create form based on hideSelect value
    const form = useForm<FormWithTeam | FormWithoutTeam>({
        resolver: zodResolver(hideSelect ? withoutTeamSchema : withTeamSchema),
        mode: 'onChange', // Restore validation on change
        defaultValues: hideSelect
            ? {
                  fullname: '',
                  email: '',
                  phone: ''
              }
            : {
                  fullname: '',
                  email: '',
                  phone: '',
                  team: ''
              }
    })

    // Handle form submission
    const onSubmit = async (values: FormWithTeam | FormWithoutTeam) => {
        setLoading(true)
        try {
            // Create payload with or without team
            const payload = {
                fullname: values.fullname,
                email: values.email,
                phone: values.phone,
                data: {
                    team: hideSelect ? '' : (values as FormWithTeam).team
                }
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
        <div>
            <div className="p-6 bg-secondary rounded-lg shadow-xl">
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
                        {!hideSelect && (
                            <FormField
                                control={form.control}
                                // @ts-ignore - TypeScript doesn't know this is only rendered when team exists
                                name="team"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Select Team</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a team" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem
                                                        value={ripple.title}
                                                    >
                                                        {ripple.title}
                                                    </SelectItem>
                                                    <SelectItem
                                                        value={breakers.title}
                                                    >
                                                        {breakers.title}
                                                    </SelectItem>
                                                    <SelectItem
                                                        value={surges.title}
                                                    >
                                                        {surges.title}
                                                    </SelectItem>
                                                    <SelectItem
                                                        value={tsunami.title}
                                                    >
                                                        {tsunami.title}
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-sm mt-1" />
                                    </FormItem>
                                )}
                            />
                        )}
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
