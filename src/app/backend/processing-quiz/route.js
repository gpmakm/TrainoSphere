"use server"
import { NextResponse } from "next/server";
import answer from '../../components/quiz1.json'
export async function POST(req) {
    const answers=await req.json();
    const email=answers.email;
    let user_answer=new Array;
    for (let i = 0; i < 12; i++) {
        user_answer[i]=answers.answer+i;
        
    }
    let marks=0;
    for (let i = 1; i <= answer.length; i++) {
        if (user_answer[i]===answer[i-1].correctAnswers[0]) {
            marks+=5;
        } else{
            marks+=0;
        }
        
    }
    return NextResponse.json({emailId:email,message:"Score is "+marks,status:200});
       
}