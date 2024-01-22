import React, { useState } from 'react';
import { View, Text, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {modalVisible ? null : (
      <Pressable onPress={openModal}>
        <Text>Show modal message</Text>
      </Pressable>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is modal...</Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    marginTop: 100,
    borderRadius: 0,
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 50,
    padding: 0,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default App;