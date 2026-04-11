
interface Props {
    color?: string;
}

const CircleThemed = ({color = 'black' }: Props) => {
  return (
      <div className={`rounded-full w-40 h-40 flex justify-center items-center mb-5`} style={{backgroundColor: color}}>
      </div>
  )
}

export default CircleThemed
