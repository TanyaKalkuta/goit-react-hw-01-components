import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ( {title, stats} ) => (
    <section class="statistics">
  <h2 class="title">{title}</h2>

    <ul class="stat-list">
            {stats.map(({ id, label, percentage }) => (
                <li key={id} class="item">
                    <span class="label">.{label}</span>
                    <span class="percentage">{percentage}%</span>
                </li>
            ))}
  </ul>
</section>
)

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
};

export default Statistics;