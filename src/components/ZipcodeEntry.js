<TextInput
  style={ { height: 40, width:100, alignSelf:'center', borderColor: 'gray', borderWidth: 1 } }
  onChangeText={(zipcode) => dispatch(setQueryAction({ zipcode }))}
  value={query.zipcode}
/>
