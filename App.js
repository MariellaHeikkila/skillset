import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-native-flex-grid';

export default function App() {

const skills = ['Frontend', 'Backend', 'Mobile', 'Database']
const min = 0
const max = 5

const [values, setValues] = useState(new Array(skills.length).fill(0))
const [average, setAverage] = useState(0)

useEffect(()=>{
  calculateAverageSkill()
}, [values])

const items = []
for (let i=0; i <skills.length; i++) {
  items.push(
    <View key={'item' + i} style={styles.skills}>
      <Text style={styles.skills}>{skills[i]}</Text>
      <Text style={styles.value}> Skill: {values[i]}</Text>
      <Container fluid>
        <Row>
          <Col>
          <Text style={styles.min}>{min}</Text>
          </Col>
          <Col xs='9'>
          <Slider          
          minimumValue={min}
          maximumValue={max}
          step={1}
          value={values[i]}
          minimumTrackTintColor="#f5d5d5"
          maximumTrackTintColor="#884f4f"
          onValueChange={(val)=> setSkillValue(val, i)}
         />
          </Col>
          <Col>
          <Text >{max}</Text>
          </Col>
        </Row>
      </Container>
    </View>
  )
}

const setSkillValue = (val, i) => {
  let skillValues = [...values]
  skillValues[i] = val
  setValues(skillValues)
}

const calculateAverageSkill = () => {
  const sum = values.reduce((a, b) => a + b, 0)
  const avg = (sum / values.length) || 0
  setAverage(avg)
} 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Skill set</Text>
        <View>{items}</View>
        <Text style={styles.averageHeader}>Average</Text>
        <Text style={styles.averageValue}>{average}</Text>
      </ScrollView>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 40
  },
  header: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  skills: {
    marginTop: 30,
    fontSize: 25,
    textAlign: 'center'
  },
  min: {
    marginLeft: 10
  },
  value: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    textAlign: 'center'
  },
  averageHeader: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 25
  },
  averageValue: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 40
  }
});
