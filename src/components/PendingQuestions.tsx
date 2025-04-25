'use client'

import Image from 'next/image'

const questions = [
  {
    name: 'Phoenix Baker',
    handle: '@phoenix',
    time: '5min ago',
    question: 'What are the requirements for opening a new store?',
    avatar: '/images/Avatar10.svg',
    active: true,
  },
  {
    name: 'Koray Okumus',
    handle: '@koray',
    time: '4hr ago',
    question: 'How do I manage inventory effectively?',
    avatar: '/images/Avatar11.svg',
    active: true,
  },
]

export default function PendingQuestions() {
  return (
    <div className="w-full max-w-sm bg-white p-4">
      <div className="flex justify-between items-center mb-3 py-3 px-6">
        <h3 className="text-lg font-semibold text-black">Pending Questions</h3>
        <span className="text-xs bg-[#2FBDFF] text-white rounded-lg px-2 py-0.5">02</span>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q, idx) => (
          <div key={idx} className="flex gap-3 border-b pb-3 last:border-none">
             <span className="w-[10px] h-[10px] mt-3 rounded-full bg-[#2FBDFF]" />
            <div className="relative w-10 h-10">
              <Image
                src={q.avatar}
                alt={q.name}
                width={40}
                height={40}
                className="object-cover"
              />
              {/* {q.active && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-white border-2 rounded-full" />
              )} */}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center text-sm">
                <p className="font-semibold text-gray-800">{q.name}</p>
                <span className="text-gray-400">{q.time}</span>
              </div>
              <p className="text-sm text-gray-500">{q.handle}</p>
              <p className="text-sm mt-2 text-gray-700">{q.question}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
