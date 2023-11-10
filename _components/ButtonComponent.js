import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ButtonComponent = ({ onPress, label, background, style, alwaysDisable, landscapeMode, doubleBox }) =>
{
    const displayButton = alwaysDisable || (!alwaysDisable && landscapeMode && label != '') || (!alwaysDisable && !landscapeMode && label == '')
    return displayButton ?
    (<View style={[doubleBox ? style.doubleBox : style.singleBox, {backgroundColor: background}]}>
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.text}>{label}</Text>
        </TouchableOpacity>
    </View>) : null;
};

export default ButtonComponent;