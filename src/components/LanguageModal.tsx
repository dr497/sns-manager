import { WrapModal } from "./WrapModal";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../utils/tailwind";
import { useLingui } from "@lingui/react";
import { t } from "@lingui/macro";
import { FontAwesome } from "@expo/vector-icons";
import { Trans } from "@lingui/macro";

const LANGUAGES = [
  { locale: "en", label: t`English` },
  { locale: "kr", label: t`Korean` },
  { locale: "zh-Hans", label: t`Simplified Chinese` },
];

export const LanguageModal = ({
  modal: { closeModal },
}: {
  modal: { closeModal: () => void };
}) => {
  const { i18n } = useLingui();

  return (
    <WrapModal closeModal={closeModal}>
      <View style={tw`bg-white rounded-lg px-4 py-10 w-[350px]`}>
        <View style={tw`flex flex-row items-center`}>
          <FontAwesome name="language" size={24} color="black" />
          <Text style={tw`ml-2 text-lg font-bold`}>
            <Trans>Language</Trans>
          </Text>
        </View>
        <View style={tw`flex flex-col mt-4 ml-5`}>
          {LANGUAGES.map((e) => {
            return (
              <View
                style={tw`flex flex-row items-center mt-1`}
                key={`language-${e.locale}`}
              >
                <TouchableOpacity
                  style={tw`flex flex-row items-center`}
                  onPress={() => i18n.activate(e.locale)}
                >
                  <View
                    style={
                      e.locale === i18n.locale
                        ? tw`border-[1px] rounded-full h-[12px] w-[12px] bg-blue-900 border-blue-900`
                        : tw`border-[1px] rounded-full h-[12px] w-[12px] border-blue-900`
                    }
                  />

                  <Text style={tw`ml-1`}>{e.label}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </WrapModal>
  );
};
