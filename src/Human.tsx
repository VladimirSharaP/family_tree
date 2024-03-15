
export type HumanType = {
  id: string
  avatar: string
  firstName: string
  secondName: string
  lastName: string
  dataOfBirth: string
}

export function Human(props: any) {
  return (
    <div className='human'>
      <div className={props.human.id}>
          <img src={props.human.avatar} className="App-logo" alt="logo" />
          <p>{props.human.lastName} {props.human.firstName} {props.human.secondName} </p>
          <p>{props.human.dataOfBirth} </p>
        </div>
    </div>
  )
}
