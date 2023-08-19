import { Card, CardContent, Typography } from '@mui/material';
import './ResultCard.css';

interface Props {
    winnerName: string | null | undefined;
}

function ResultCard(props: Props) {
    const { winnerName } = props;
    if (winnerName) {
        return (
            <Card sx={{ minWidth: 275, marginBottom: 4, backgroundColor: '#E1F8FF' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {winnerName} wins!
                    </Typography>
                </CardContent>
            </Card>
        );
    }
    return (<></>);
}

export default ResultCard;
