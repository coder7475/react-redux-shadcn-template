import type { RootState } from '@/redux/store'
import { decrement, increment } from '@/redux/slices/counterSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'

export function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <span className="text-2xl font-semibold w-12 text-center">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}