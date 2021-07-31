
import React ,{Component} from 'react';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Section from './Components/Seaction';
import Notification from './Components/Notification';

class App extends Component {

   state={
     good: 0,
     neutral: 0,
     bad: 0
   }
   
   handleButtonClick = (e) => {
      const { name } = e.currentTarget;
      
      this.setState(prevState => {
         return { [name] : prevState[name] + 1 }
      })
        
   }

 
   render()
   {
      const { good, neutral, bad } = this.state;
      const countTotalFeedback = good + neutral + bad;
      const countPositiveFeedbackPercentage = Math.floor((good / countTotalFeedback) * 100);
      return (
    <>
       
         <Section title={'Please leave feedback'}>
            <FeedbackOptions
               options={['good', 'neutral', 'bad']}
               onLeaveFeedback={this.handleButtonClick}
            />
         </Section>
         <Section title={'Statistics'}>
            {countTotalFeedback ? (
                  <Statistics 
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={countTotalFeedback}
                        positivePercentage={countPositiveFeedbackPercentage}
                  />
               ) : null}

            {countTotalFeedback ? null : <Notification message="No feedback given" />}
         </Section> 
    </>
    
 );
 }
}

export default App;
