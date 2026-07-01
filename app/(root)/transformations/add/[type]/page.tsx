import React from 'react'
import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";

// 1. Make the page component async
const AddTransformationTypePage = async ({ params }: SearchParamProps) => {
  
  // 2. Await the params Promise
  const { type } = await params;

  // 3. Look up your configuration
  const transformation = transformationTypes[type as keyof typeof transformationTypes];

  const {userId} = await auth();
  if(!userId) redirect('/sign-in')
  const user = await getUserById(userId);
    
  // 4. Handle invalid URLs or typos gracefully
  if (!transformation) {
    return <div className="p-5">Transformation type not found.</div>;
  }

  return (
    <>
        <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
        />

        <section className='mt-10'>
            <TransformationForm 
            action="Add"
            userId={user._id}
            type={transformation.type as TransformationTypeKey}
            creditBalance={user.creditBalance}
            />
        </section>
        
    </>
    
  )
}

export default AddTransformationTypePage
