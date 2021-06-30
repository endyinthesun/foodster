import React, { useState } from "react";
import { Modal, View, StyleSheet, Text, Pressable, SafeAreaView, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";

//SVGs
import CrossIcon from "@icons/cross.svg";
import PhoneIcon from "@icons/phone.svg";
import EnvelopeIcon from "@icons/envelope.svg";
import ClockGrayIcon from "@icons/clock-gray.svg";
import TruckGrayIcon from "@icons/truck-gray.svg";

import FacebookIcon from "@icons/facebook.svg";
import InstagramIcon from "@icons/instagram.svg";

//components
import { OpenUrlText, FadeBg } from "@atoms/index";

//store
import { filtersStore, othersStore } from "@store/index";

//styles
import { BLUE, WHITE, WHITE_TRANSPARENT } from "@styles/colors";
import {
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_16,
  FONT_SIZE_20,
} from "@styles/typography";

export default observer(function ModalAbout({
  description,
  phoneNumbers = [],
  email,
  workingTime,
  freeFrom,
  deliverySchedule,
}) {
  const closeModal = () => {
    othersStore.toggleModalAbout(false);
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Modal
        visible={othersStore.modalAbout}
        animationType={"slide"}
        transparent={true}
        onRequestClose={() => {
          othersStore.toggleModalAbout(false);
        }}
      >
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.headText}>About</Text>
            <Pressable style={styles.headIcon} onPress={() => closeModal()}>
              <CrossIcon />
            </Pressable>
          </View>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <View style={styles.details}>
              <View style={styles.detailsBlock}>
                <View style={styles.detailsIconContainer}>
                  <PhoneIcon style={styles.detailsIcon} />
                </View>
                <OpenUrlText
                  url={`tel:+${phoneNumbers[0]}`}
                  styles={[styles.detailsText, { color: BLUE }]}
                >
                  {phoneNumbers[0]}
                </OpenUrlText>
              </View>
              <View style={styles.detailsBlock}>
                <View style={styles.detailsIconContainer}>
                  <EnvelopeIcon style={styles.detailsIcon} />
                </View>
                <Text style={styles.detailsText}>{email}</Text>
              </View>
              <View style={styles.detailsBlock}>
                <View style={styles.detailsIconContainer}>
                  <ClockGrayIcon style={styles.detailsIcon} />
                </View>
                <Text style={styles.detailsText}>{workingTime}</Text>
              </View>
              <View style={styles.detailsBlock}>
                <View style={styles.detailsIconContainer}>
                  <TruckGrayIcon style={styles.detailsIcon} />
                </View>
                <Text style={styles.detailsText}>Free delivery from ${freeFrom} in order </Text>
              </View>
              <View style={styles.detailsBlock}>
                <View style={styles.detailsIconContainer}>
                  <ClockGrayIcon style={styles.detailsIcon} />
                </View>
                <Text style={styles.detailsText}>{deliverySchedule}</Text>
              </View>
            </View>
            <View style={styles.social}>
              <FacebookIcon style={styles.socialIcon} />
              <InstagramIcon style={styles.socialIcon} />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    zIndex: 5,
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    backgroundColor: WHITE,
    height: "60%",
    paddingHorizontal: 16,
    paddingTop: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headText: {
    fontSize: FONT_SIZE_20,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  headIcon: {
    padding: 15,
  },
  scrollContainer: {
    paddingBottom: 24,
  },
  descriptionText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_16,
  },
  details: {
    marginTop: 8,
  },
  detailsBlock: {
    flexDirection: "row",
    marginTop: 16,
  },
  detailsIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 23,
    width: 23,
    marginRight: 10,
  },
  detailsIcon: {},
  detailsText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_16,
  },
  social: {
    marginTop: 24,
    paddingLeft: 32,
    flexDirection: "row",
  },
  socialIcon: {
    marginRight: 20,
  },
});
