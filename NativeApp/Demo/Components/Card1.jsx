import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import Up from "../assets/Icons/down.png"

const Card1 = () => (
  <Card.Title
    title="Extrades"
    titleStyle={{fontSize:28,lineHeight:60}}
    // titleNumberOfLines={2}
    subtitle="$3400000"
    subtitleStyle={{fontSize:20,}}
    left={(props) => <Avatar.Image size={50} source={Up} />}
    
  />
);



export default Card1;