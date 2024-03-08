import { StyleSheet } from "react-native"

const core = StyleSheet.create({
  primaryColor: "#2f2e41",
  primaryButton: {
    backgroundColor: "#6C63FF",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 4,
  },
  primaryButtonText: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
  },
  messageSender: {
    height: 30,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#eee",
    marginTop: 5,
  },
})

export default core
