import React, { FC, useEffect, useRef, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { WaterLoaderStyles as styles } from "./styles.common";

const WaterLoader: FC<{}> = () => {
  const waterHeight = useRef(new Animated.Value(0)).current;
  const waveAnim = useRef(new Animated.Value(0)).current;

  const [percentage, setPercentage] = useState<number>(0.000);

  useEffect(() => {
    // Water fill animation
    Animated.timing(waterHeight, {
      toValue: 1,
      duration: 20000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    // Wave animation loop
    Animated.loop(
      Animated.timing(waveAnim, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();

    // Percentage listener
    const listener = waterHeight.addListener(({ value }) => {
      const perc = Math.min(value * 99.98, 99.98); // cap at 99.98%
      setPercentage(Number(perc.toFixed(3)));
    });

    return () => waterHeight.removeListener(listener);
  }, []);

  // Water fill height
  const animatedHeight = waterHeight.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  // Waves horizontal translation
  const waveTranslate = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "-50%"],
  });
  const reverseWaveTranslate = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["-50%", "0%"],
  });

  // Waves vertical position = top of water
  const waveY = waterHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [120, 0], // waterContainer height = 120
  });

  return (
    <View style={styles.analysisViewBoxStyle}>
      <View style={styles.waterContainer}>
        {/* Water Fill */}
        <Animated.View style={[styles.waterFill, { height: animatedHeight }]} />

        {/* Front Wave */}
        <Animated.View
          style={[
            styles.waterWave,
            {
              transform: [{ translateX: waveTranslate }, { translateY: waveY }],
            },
          ]}
        >
          <Svg height={20} width="2000">
            <Path
              d="M0 10 Q 25 0, 50 10
                T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10
                T 450 10 T 500 10 T 550 10 T 600 10 T 650 10 T 700 10 T 750 10 T 800 10
                T 850 10 T 900 10 T 950 10 T 1000 10 T 1050 10 T 1100 10 T 1150 10 T 1200 10
                T 1250 10 T 1300 10 T 1350 10 T 1400 10 T 1450 10 T 1500 10 T 1550 10 T 1600 10
                T 1650 10 T 1700 10 T 1750 10 T 1800 10 T 1850 10 T 1900 10 T 1950 10 T 2000 10
              "
              fill="transparent"
              stroke="#4A90E2"
              strokeWidth={3}
            />
          </Svg>
        </Animated.View>

        {/* Back Wave */}
        <Animated.View
          style={[
            styles.waterWave,
            {
              transform: [{ translateX: reverseWaveTranslate }, { translateY: Animated.add(waveY, -4) }],
            },
          ]}
        >
          <Svg height={15} width="2000">
            <Path
              d="M0 10 Q 25 0, 50 10
                T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10
                T 450 10 T 500 10 T 550 10 T 600 10 T 650 10 T 700 10 T 750 10 T 800 10
                T 850 10 T 900 10 T 950 10 T 1000 10 T 1050 10 T 1100 10 T 1150 10 T 1200 10
                T 1250 10 T 1300 10 T 1350 10 T 1400 10 T 1450 10 T 1500 10 T 1550 10 T 1600 10
                T 1650 10 T 1700 10 T 1750 10 T 1800 10 T 1850 10 T 1900 10 T 1950 10 T 2000 10
              "
              fill="transparent"
              stroke="#7FB9F7"
              strokeWidth={3}
            />
          </Svg>
        </Animated.View>

        {/* Overlay text */}
        <View style={styles.loaderTextWrapper}>
          <Text style={styles.progressText}>Neura peeking through its lens…</Text>

          {/* Percentage */}
          <Text style={styles.progressPercentage}>{`${percentage}%`}</Text>
        </View>
      </View>
    </View>
  );
};

export default WaterLoader;
