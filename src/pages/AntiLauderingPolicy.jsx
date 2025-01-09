import TelegraphPage from "./TelegraphPage";
import { useNavigate } from 'react-router-dom';

const AntiLauderingPolicy = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div style={{
                top: 30,
                left: 15,
                padding: 20
            }}>
                <div className={'cursor-pointer'} onClick={() => navigate('/')}>
                    <p className={'text-xl px-4'} style={{
                        color: "white"
                    }}>Back</p>
                </div>
            </div>

            <TelegraphPage path={'AML-politika-01-09'}/>
        </div>
    )
}

export default AntiLauderingPolicy
