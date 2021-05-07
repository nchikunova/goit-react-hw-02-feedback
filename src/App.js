import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = name => {
    this.setState(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, item) => (total += item),
      0,
    );
  };

  countPositiveFeedbackPercentage = (total, positiveFeedback) => {
    return Math.round((positiveFeedback / total) * 100);
  };

  render() {
    const buttonNames = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    // const total = Object.values(this.state).reduce((acc, i) => acc + i, 0);
    const positive = this.countPositiveFeedbackPercentage(
      total,
      good,
    );

    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.clickHandler}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentageFeedback={positive}
            />
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
