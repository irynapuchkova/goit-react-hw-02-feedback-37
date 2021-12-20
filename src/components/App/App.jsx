import React from 'react';
import { Component } from 'react';

import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    let reaction = e.currentTarget.innerText.toLowerCase();
    const keys = Object.keys(this.state);

    if (keys.filter(key => key === reaction)) {
      this.setState(prevState => ({ [reaction]: prevState[reaction] + 1 }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    return Number.parseInt((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['Good', 'Neutral', 'Bad'];
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title="Please )) Leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 && <Notification message="There is no feedback ((" />}
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
