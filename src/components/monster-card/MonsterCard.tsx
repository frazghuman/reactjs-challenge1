import { Card, CardActionArea, CardMedia, CardContent, Typography, Slider } from '@mui/material';
import './MonsterCard.css';
import MonsterModel from '../../models/monster';
import MonsterImages from '../../utils/monsterImages';

interface Props {
    monster: MonsterModel;
    showMonsterProperties: boolean
}


function MonsterCard(props: Props) {
    const { monster: { name, hp, attack, defense, speed }, showMonsterProperties } = props;
    const monsterImages: any = MonsterImages;

    const getImageByIndex = (index: string | undefined): any => {
        if (index) {
            return monsterImages[index];
        }
        return null;
    }
    return (
        <Card sx={{ maxWidth: (showMonsterProperties) ? 307 : 150 }}>
            <CardActionArea>
                <div className={(showMonsterProperties) ? "CardMediaContainer" : "SmallCardMediaContainer"}>
                    <CardMedia
                        className={ (showMonsterProperties) ? "Img" : "SmallImg"}
                        component="img"
                        image={getImageByIndex(name)}
                        alt={name}
                    />
                </div>
                <CardContent className={ (showMonsterProperties) ? "" : "SmallMuiCardContent-root"}>
                <Typography className={(showMonsterProperties) ? "H5Custom" : "H5SmallCustom"} gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                { 
                    (showMonsterProperties) ?
                    <div>
                        <div>
                            <label className="SliderLabel">HP</label>
                            <Slider
                                disabled
                                marks={false}
                                max={100}
                                min={0}
                                value={hp}
                            />
                        </div>
                        <div>
                            <label className="SliderLabel">Attack</label>
                            <Slider
                                disabled
                                marks={false}
                                max={100}
                                min={0}
                                value={attack}
                            />
                        </div>
                        <div>
                            <label className="SliderLabel">Defense</label>
                            <Slider
                                disabled
                                marks={false}
                                max={100}
                                min={0}
                                value={defense}
                            />
                        </div>
                        <div>
                            <label className="SliderLabel">Speed</label>
                            <Slider
                                disabled
                                marks={false}
                                max={100}
                                min={0}
                                value={speed}
                            />
                        </div>
                    </div>
                    : <div></div>
                }
                
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MonsterCard;
