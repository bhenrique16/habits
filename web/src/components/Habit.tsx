interface HabitProps {
    completed:number
}
function Habit(props: HabitProps){
    return (
        <h1 className="bg-zinc-900">{props.completed}</h1>
    )
}

export default Habit