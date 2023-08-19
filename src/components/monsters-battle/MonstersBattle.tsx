import { useEffect, useState } from 'react';
import MonsterCard from '../monster-card/MonsterCard';
import './MonstersBattle.css';
import { Button, Card, CardActionArea, Typography } from "@mui/material";
import MonsterModel from '../../models/monster';
import ResultCard from '../result-card/ResultCard';
import { connect } from 'react-redux';
import { selectComputerMonster, selectMonster } from '../../store/actions/monsterActions';
import api from '../../utils/api';
import { calculateBattleResult } from '../../services/battle';

interface Props {
    selectedMonster: MonsterModel | null;
    selectedComputerMonster: MonsterModel | null
}

const MonstersBattle: React.FC<Props> = ({ selectedMonster, selectedComputerMonster }) => {
    
    const [monster, setMonster] = useState<MonsterModel | null | any>(null);
    const [computerMonster, setComputerMonster] = useState<MonsterModel | null | any>(null);
    const [winnerName, setWinnerName] = useState<string | any>('');

    useEffect(() => {
        setMonster(Object.keys({...selectedMonster}).length ? {...selectedMonster} : null);
        setWinnerName('');
    }, [selectedMonster])

    useEffect(() => {
        setComputerMonster(Object.keys({...selectedComputerMonster}).length ? {...selectedComputerMonster} : null);
    }, [selectedComputerMonster])

    const handleStartBattle = async () => {
        if (selectedMonster && selectedComputerMonster) {
            // Send battle request to API and get battle result
            // api.post('/battle', {
            //     "monster1Id": selectedMonster.id,
            //     "monster2Id": selectedComputerMonster.id
            //   })
            // .then(response => response.data)
            // .then(response => {
            //     setWinnerName(response.winner);
            // })
            // .catch(error => {
            //     console.error('Error fetching monsters:', error);
            // });

            const response = calculateBattleResult(selectedMonster, selectedComputerMonster);
            setWinnerName(response.winner);
        }
      };

    return (
        <>
            <ResultCard winnerName={winnerName} />
            <div className="BattleContainer">
                {(monster) ? <MonsterCard monster={monster} showMonsterProperties={true} />
                : 
                <Card className='Placeholder' sx={{ maxWidth: 307, minWidth: 307, minHeight: '501px' }}>
                    <CardActionArea sx={{ display: 'flex' }}>
                        <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                            Player
                        </Typography>    
                    </CardActionArea>
                </Card>
                }
                <Button className="ButtonStartBattle" variant="contained" color="primary"
                    onClick={handleStartBattle}>
                    Start Battle
                </Button>
                {(computerMonster) ? <MonsterCard monster={computerMonster} showMonsterProperties={true} /> :
                <Card className='Placeholder' sx={{ maxWidth: 307, minWidth: 307, minHeight: '501px' }}>
                    <CardActionArea sx={{ display: 'flex' }}>
                        <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                            Computer
                        </Typography>    
                    </CardActionArea>
                </Card>
                }
            </div>
        </>
    );
}

const mapStateToProps = (state: any) => ({
    selectedMonster: state.monster.selectedMonster,
    selectedComputerMonster: state.monster.selectedComputerMonster
  });
  
export default connect(mapStateToProps)(MonstersBattle);
