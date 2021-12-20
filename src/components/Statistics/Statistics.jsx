import PropTypes from 'prop-types';
import {
  FeedbackPointsSet,
  TotalPoints,
  FeedbackPoints,
  PositivePotion,
} from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <FeedbackPointsSet>
      <FeedbackPoints>
        Good : <span>{good}</span>
      </FeedbackPoints>
      <FeedbackPoints>
        Neutral : <span>{neutral}</span>
      </FeedbackPoints>
      <FeedbackPoints>
        Bad : <span>{bad}</span>
      </FeedbackPoints>
      <TotalPoints>
        Total : <span>{total}</span>
      </TotalPoints>
      <PositivePotion>
        Positive Feedback :
        <span>{positivePercentage && positivePercentage} %</span>
      </PositivePotion>
    </FeedbackPointsSet>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
