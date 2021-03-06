// @flow

import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Card from './Card';

const PREDEFINED_LAPS = [10000, 5000, 3000, 1500, 1000, 800, 400, 200, 100];

type ToHHMMSSMode = 'units' | 'normal' | null;
type Seconds = number;

export const toHHMMSS = (
  time: Seconds,
  mode: ToHHMMSSMode = 'units',
  digits: number = 0
) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time - hours * 3600 - minutes * 60;

  const parts = [
    [hours, 'hours'],
    [minutes, 'min'],
    [seconds.toFixed(digits), 'sec']
  ];

  if (!hours) {
    parts.shift();
  }

  if (mode === 'units') {
    return parts.map(([value, unit]) => `${value} ${unit}`).join(' ');
  }

  return parts.map(([value]) => (+value < 10 ? `0${value}` : value)).join(':');
};

const toKMH = (meters, seconds) => {
  return (seconds === 0 ? 0 : (meters / seconds) * 3.6).toFixed(1) + ' km/h';
};

const withCommas = (value, fixed = 0) => {
  return value.toFixed(fixed).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

type Props = {
  meters: number,
  seconds: number
};

const Summary = ({ data }) => (
  <View style={styles.summary}>
    {data.map(([key, value]) => (
      <View key={key} style={{ flexDirection: 'row', paddingVertical: 5 }}>
        <View style={{ width: '50%' }}>
          <Text style={[styles.text, styles.textSmall, styles.textBold]}>
            {key}
          </Text>
        </View>
        <Text style={[styles.text, styles.textSmall]}>{value}</Text>
      </View>
    ))}
  </View>
);

class PaceCalculatorView extends PureComponent<Props> {
  render() {
    const { meters, seconds } = this.props;

    const isMissingInputs = !meters || !seconds;

    return (
      <Card>
        <View
          style={[isMissingInputs && { filter: 'blur(6px)', opacity: 0.5 }]}
        >
          <Summary
            data={[
              ['Distance', `${withCommas(meters)} m`],
              ['Time', toHHMMSS(seconds, 'normal', 2)],
              [
                'Required pace',
                `${toHHMMSS(
                  (seconds * 1000) / (meters || 1),
                  'normal'
                )} min/km (${toKMH(meters, seconds)})`
              ]
            ]}
          />
          <View style={{ paddingVertical: 30 }}>
            <View style={[styles.row, { padding: 8 }]}>
              <View style={[{ flex: 1 }]}>
                <Text style={[styles.text, styles.textBold]}>Lap</Text>
              </View>
              <View style={[{ flex: 1 }]}>
                <Text style={[styles.text, styles.textBold]}>Time</Text>
              </View>
            </View>
            {PREDEFINED_LAPS.map((distance, index) => {
              const scaledSeconds = (seconds * distance) / (meters || 1);
              return (
                <View
                  key={index}
                  style={[
                    {
                      flexDirection: 'row'
                    },
                    index % 2 === 0 && {
                      backgroundColor: '#f3f3f3'
                    },
                    distance === 400 && {
                      backgroundColor: '#F5DA81'
                    },
                    distance === 1000 && {
                      backgroundColor: '#a8ddd4'
                    },
                    { padding: 8 }
                  ]}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.text}>{withCommas(distance)} m</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[styles.text, { cursor: 'help' }]}
                      title={`${scaledSeconds.toFixed(2)} seconds`}
                    >
                      <Text style={{ color: '#ccc' }}>~ </Text>
                      {toHHMMSS(scaledSeconds)}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <Text style={[styles.paragraph, styles.text, styles.textSmall]}>
          This nifty pace calculator shows how fast you need to run on average
          to achieve your time-goals. The table shows required lap-times to
          finish in the desired total time.
          <Text style={{ fontStyle: 'italic' }}>
            It does not show estimated equivalent race performances.
          </Text>
        </Text>

        <Text style={[styles.paragraph, styles.text, styles.textSmall]}>
          Use this tool to go figure out how fast you must run or see how
          incredibly fast people have managed to run various distances.{' '}
          <Text style={{ fontStyle: 'italic' }}>
            If you are running on a regular track, the time in the 400 m row
            should match your watch {'⌚️'} after each lap to be sure you make
            it in time.
          </Text>
        </Text>
      </Card>
    );
  }
}

export default PaceCalculatorView;
