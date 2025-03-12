'use client';

import * as x from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'; // Corrected import
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Toaster, toast } from "sonner";

const formSchema = z.object({
    name: z.string() .min(1, {
        message: 'Name is required'
    }),
    email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Please enter a valid email' }),
    password: z.string().min(1,
        { message: 'Password is required',
    }),
    confirmpassword: z.string().min(1,
        { message: 'Confirm Password is required',

    }),
});

const RegisterForm = () => {
    const router = useRouter();
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        router.push('/');
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                    Sign up by adding the info below
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        {/* Email Field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input 
                                            className="bg-slate-100 dark:bg-slate-500 border-focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0" 
                                            placeholder="Enter Email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        {/* Password Field */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input 
                                            type="password"
                                            className="bg-slate-100 dark:bg-slate-500 border-focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0" 
                                            placeholder="Enter Password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='w-full '>Sign In</Button>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default RegisterForm;
