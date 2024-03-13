import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useState } from 'react'



export default function Demo() {





  return (
    <div className='flex justify-start px-40'>
    <Popover className="justify-start px-1 ml-5">
      <Popover.Button className="inline-flex border-transparent hover:text-green-500 items-center gap-x-1 text-sm font-semibold leading-6 text-yellow-200">
        <span>Home Appliances</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>
   
        <Popover.Panel className="absolute left-25% overscroll-contain z-10 mt-2 flex w-52 h-26 px-1">
          <div className="w-96 max-w-24 flex-auto overflow-hidden rounded-sm bg-slate-50 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-3 overflow-y-auto max-h-30">
            
                <a href='/productsbycat/6'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer '>Kitchen Appliances</option></a>
                <a href='/productsbycat/7'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Furniture</option></a>
                <a href='/productsbycat/8'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Electronics</option></a> 
            </div>
            
          </div>
        </Popover.Panel>
      
    </Popover>
    <Popover className="justify-start px-1 ml-5">
      <Popover.Button className="inline-flex border-transparent items-center gap-x-1 text-sm font-semibold leading-6 text-yellow-200">
        <span>Fashion</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>


        <Popover.Panel className="absolute left-25% z-10 mt-2 flex w-24 h-32 px-1">
          <div className="w-96 max-w-96 flex-auto overflow-hidden rounded-sm bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-3">
                <a href='/productsbycat/13'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Men</option></a>
                <a href='/productsbycat/14'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Women</option></a>
                <a href='/productsbycat/15'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Kids</option></a> 
            </div>
            
          </div>
        </Popover.Panel>
      
    </Popover>
    <Popover className="justify-start px-1 ml-5">
      <Popover.Button className="inline-flex border-transparent items-center gap-x-1 text-sm font-semibold leading-6 text-yellow-200">
        <span>Beauty</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>


        <Popover.Panel className="absolute left-25% z-10 mt-2 flex w-40 h-32 px-1">
          <div className="w-96 max-w-96 flex-auto overflow-hidden rounded-sm bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-3">
                <a href='/productsbycat/9'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Oil</option></a>
                <a href='/productsbycat/10'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Shampoo</option></a>
                <a href='/productsbycat/11'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Face Wash</option></a> 
                <a href='/productsbycat/12'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Soap</option></a> 

            </div>
            
          </div>
        </Popover.Panel>
      
    </Popover>
    <Popover className="justify-start px-1 ml-5">
      <Popover.Button className="inline-flex border-transparent items-center gap-x-1 text-sm font-semibold leading-6 text-yellow-200">
        <span>Electronics</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>


        <Popover.Panel className="absolute left-25% z-10 mt-2 flex w-32 h-36 px-1">
          <div className="w-96 max-w-96 flex-auto overflow-hidden rounded-sm bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-3">
                <a href='/productsbycat/16'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>TV</option></a>
                <a href='/productsbycat/17'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Laptop</option></a>
                <a href='/productsbycat/19'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Mobile</option></a> 
                <a href='/productsbycat/18'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Camera</option></a> 

            </div>
            
          </div>
        </Popover.Panel>
      
    </Popover>
     <Popover className="justify-start px-1 ml-5">
      <Popover.Button className="inline-flex border-transparent items-center gap-x-1 text-sm font-semibold leading-6 text-yellow-200">
        <span>Super Market</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>


        <Popover.Panel className="absolute left-25% z-10 mt-2 flex w-56 h-36 px-1">
          <div className="w-96 max-w-96 flex-auto overflow-hidden rounded-sm bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-3">
                <a href='/productsbycat/20'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>House Hold Care</option></a>
                <a href='/productsbycat/21'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Fruits and vegetables</option></a>
                <a href='/productsbycat/22'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Pulses and Dal</option></a> 
                <a href='/productsbycat/23'><option className='flex border-solid border-black text-xl text-black  hover:bg-slate-200 hover:cursor-pointer'>Package food</option></a> 

            </div>
            
          </div>
        </Popover.Panel>
      
    </Popover>
    </div>
  )
}




