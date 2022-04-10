import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import classNames from 'classnames'
import jjPikachu from '../../images/jj-pikachu.png'
import jjChair from '../../images/jj-chair.png'
import jjLick from '../../images/jj-lick.png'
import jjGameboy from '../../images/jj-gameboy.png'
import jjPineapple from '../../images/jj-pineapple.jpg'

type Props = {
  isOpen: boolean
  message: string
  variant?: 'success' | 'warning'
  topMost?: boolean
  reason?: string
  solution?: string
}

export const Alert = ({
  isOpen,
  message,
  variant = 'warning',
  topMost = false,
  reason,
  solution,
}: Props) => {
  const classes = classNames(
    'fixed top-5 left-1/2 transform -translate-x-1/2 max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
    {
      'bg-rose-500 text-white': variant === 'warning',
      'bg-blue-500 text-white': variant === 'success',
    },
    topMost ? 'z-20' : ''
  )

  let winImg = ''
  switch (message) {
    case 'PAWG! You win!':
      winImg = jjChair
      break
    case 'JackJack kisses for you!':
      winImg = jjLick
      break
    case 'Your dog speaks Chinese?! Genius.':
      winImg = jjPineapple
      break
    case 'First try! Just like Kirby':
      winImg = jjGameboy
      break
    case 'WWD!':
      winImg = jjPikachu
      break
    default:
  }

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300 transition"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={classes}>
        <div className="p-4 text-center">
          <p className="font-black text-3xl pb-2">{message}</p>
          {winImg && (
            <img
              src={winImg}
              className="shadow rounded-full max-w-full h-auto align-middle border border-2 border-white m-auto"
              alt="Jack Jack"
            />
          )}
          {reason && winImg && (
            <div className="mt-8 p-4 bg-violet-100 rounded-lg text-left">
              <p className="font-bold text-black text-xl">Why {solution}?</p>
              <p className="text-black">{reason}</p>
            </div>
          )}
        </div>
      </div>
    </Transition>
  )
}
