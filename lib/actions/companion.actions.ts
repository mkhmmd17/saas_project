"use server"

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";

export const createCompanion = async (formData: CreateCompanion) => {
    // what is userID ???
    const {userId: author} = await auth();
    const supabase = createSupabaseClient();

    //what is that????
    const {data, error} = await supabase
        .from('companions')
        .insert({... formData, author})
        .select();

    if (error || !data) throw new Error(error?.message || 'Failed to create companion'); //why new Error?

    return data[0];
}