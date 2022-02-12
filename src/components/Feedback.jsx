import {useState} from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";

export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const setFeedback = name => {
        switch (name) {
            case "good":
                setGood( state => state + 1 )
                break;
            case "neutral":
                setNeutral( state => state + 1 )
                break;
            case "bad":
                setBad( state => state + 1 )
                break;
            
            default: return;
                
        }
    }

    const countTotalFeedback = () => {  
        return good + neutral + bad
    };
    const  countPositiveFeedbackPercentage = () => { 
        return Math.round((good * 100) / countTotalFeedback());
       
    };

    const totalFeedback = countTotalFeedback();
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
    const objectKey = Object.keys({ good, neutral, bad })


        return (
            <div>
                <Section title="Please leave feedback"
                >
                    
                    <FeedbackOptions
                        options={objectKey}
                        onLeaveFeedback={setFeedback}
                    />
                </Section>  
                <Section title="Statistic">
                    {countTotalFeedback() === 0 ? (
                        <Notification message="No feedback given"/>
                            ) : (
                        <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalFeedback}
                        positivePercentage={ positiveFeedbackPercentage }
                        />
                    )}
                </Section>
            </div>
        );
    

}
