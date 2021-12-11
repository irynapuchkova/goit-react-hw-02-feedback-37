// import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p>
        Good : <span>{good}</span>
      </p>
      <p>
        Neutral : <span>{neutral}</span>
      </p>
      <p>
        Bad : <span>{bad}</span>
      </p>
      <p>
        Total : <span>{total}</span>
      </p>
      <p>
        Positive Feedback :
        <span>{positivePercentage && positivePercentage}%</span>
      </p>
    </div>
  );
}
