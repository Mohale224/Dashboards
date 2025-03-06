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
    FormMessage,
} from '@/components/ui/form';
import { Card,
     CardConten,
      CardDescription,
       CardHeader,
        CardTitle
    } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import posts from "@/components/data/posts";
import { z } from "zod";
import { Toaster, toast } from "sonner";
import { Router } from "lucide-react";

const formSchema = z.object({
    email: z.string().min(1,
    { message: 'Email is required'

    }).email({
    message: 'Please enter a valid email'
    }),

    password: z.string().min(1,
    { message: 'Password is required' })
    });



const LoginForm = () => {
    const router = useRouter();
    

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email:'',
            password:'',
        },
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        router.push('/');
    };

    return (
        <>
            
            <h3 className="text-2xl mb-4">Edit Post</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Title
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Enter Title"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Body
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Enter Body"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Bitcoin
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Enter Author"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                                    Date
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="date"
                                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Enter Date"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Update Post</Button>
                </form>
            </Form>

            {/* ✅ Include Toaster for toast notifications */}
            <Toaster />
        </>
    );
};

export default LoginForm;
