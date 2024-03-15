import { Human, HumanType} from './Human';

export type FamilyTreeTypes = {
  familyTree: Array<Array<HumanType>>
}

export function Breed(props: FamilyTreeTypes) {
  return (
    <div className='breed'>
      {
        props.familyTree.map ( t => 
          <div>
            {
              t.map ( i => <Human human = {i} /> )
            }
          </div>  
        )
      }
    </div>
  );
}
