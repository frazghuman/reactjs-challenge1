import { useEffect, useState } from 'react';
import './Monsters.css';
import api from '../../utils/api';
import MonsterCard from '../monster-card/MonsterCard';
import MonsterModel from '../../models/monster';

import { selectMonster, selectComputerMonster } from './../../store/actions/monsterActions';
import { connect } from 'react-redux';

interface Props {
    selectedMonster: MonsterModel | null;
    selectMonster: (monster: MonsterModel | null) => void;
    selectedComputerMonster: MonsterModel | null;
    selectComputerMonster: (monster: MonsterModel | null) => void;
}

const Monsters: React.FC<Props> = (props: Props) => {
    const { selectedMonster, selectMonster, selectedComputerMonster, selectComputerMonster } = props;

    const [monsters, setMonsters] = useState([]);
    const [availableMonsters, setAvailableMonsters] = useState([]);

    const handleMonsterSelection = (monster: MonsterModel) => {
        selectMonster(monster);

        // Randomly select computer's monster
        setAvailableMonsters(monsters.filter((mnstr: MonsterModel) => mnstr.id !== monster.id));

        
    };

    useEffect(() => {
        // Usage
        (async () => {
            console.log('Starting loop...');
            await delayedLoop(availableMonsters.length, 70); // 5 iterations with a delay of 1000ms (1 second)
            const randomIndex = Math.floor(Math.random() * availableMonsters.length);
            const randomComputerMonster = availableMonsters[randomIndex];
            selectComputerMonster(randomComputerMonster);
            console.log('Loop completed.');
        })();
        
    }, [availableMonsters])


    async function delayedLoop(iterations: number, delayMs: number) {
        for (let i = 0; i < iterations; i++) {
          console.log(`Iteration ${i + 1}`);
          selectComputerMonster(availableMonsters[i]);
          await sleep(delayMs); // Sleep for the specified delay
        }
      }
      
      function sleep(ms: number) {
        return new Promise<void>(resolve => setTimeout(resolve, ms));
      }
      
      
      

    useEffect(() => {
        // Fetch monsters using the configured Axios instance
        // api.get('/monsters')
        // .then(response => {
        //     console.log(JSON.stringify(response.data))
        //     setMonsters(response.data);
        // })
        // .catch(error => {
        //     console.error('Error fetching monsters:', error);
        // });
        const monstersData = JSON.parse(`[{"id":3,"name":"Dead Unicorn","attack":40,"defense":30,"speed":50,"hp":80},{"id":4,"name":"Old Shark","attack":60,"defense":40,"speed":90,"hp":70},{"id":5,"name":"Red Dragon","attack":25,"defense":20,"speed":60,"hp":60},{"id":6,"name":"Robot Bear","attack":55,"defense":35,"speed":70,"hp":65},{"id":7,"name":"Angry Snake","attack":30,"defense":25,"speed":40,"hp":50}]`);
        setMonsters(monstersData);
    }, []);
  
    return (
        <div>
            <label className='Heading'>Select your monster</label>
            <div className='MonstersContainer'>
                {monsters.map((monster: MonsterModel) => (
                    <div onClick={() => handleMonsterSelection({...monster})} key={monster.id}>
                        <MonsterCard monster={monster} showMonsterProperties={false} />
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    selectedMonster: state.monster.selectedMonster,
    selectedComputerMonster: state.monster.selectedComputerMonster
  });
  
  const mapDispatchToProps = {
    selectMonster,
    selectComputerMonster
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Monsters);
