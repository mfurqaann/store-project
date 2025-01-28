'use client'
import React, { useContext } from 'react'
import { CartContext } from '../context/cart'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'

function Checkout() {
  const { cart } = useContext(CartContext)
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white w-auto h-auto p-5 md:p-5 md:w-3/4 md:min-h-96 rounded-2xl'>
        <Table>
          <TableCaption>List of product at chart</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='text-center text-2xl'>Item</TableHead>
              <TableHead className='text-center text-2xl'>Photo</TableHead>
              <TableHead className='text-center text-2xl'>Price</TableHead>
              <TableHead className='text-center text-2xl'>Amount</TableHead>
              <TableHead className='text-center text-2xl'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map((val: Product) => (
              <TableRow key={val.id}>
                <TableCell className='text-center text-lg'>{val.title}</TableCell>
                <TableCell className='text-center text-lg'>
                  <Image src={val.image} alt={val.description}
                    width={150}
                    height={150}

                    className='mx-auto'
                  />
                </TableCell>
                <TableCell className='text-center text-lg'>${val.price}</TableCell>
                <TableCell className='text-center text-lg'>1</TableCell>
                <TableCell className='text-center text-lg'>Tombol Action</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Checkout