import { NextResponse } from 'next/server';
import dbconn from '../../../utils/dbconn'
import Contact from '../../../models/contact'

export async function POST(req,res){
    try {
        const body = await req.json()
        await dbconn();
        await Contact.create(body);

        return NextResponse.json({message:'Message sent successfully'},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:'Internal server error'},{status:404})
    }

}