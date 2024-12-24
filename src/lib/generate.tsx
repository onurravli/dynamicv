import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Resume } from "./template";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827",
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#374151",
  },
  description: {
    fontSize: 8,
    marginBottom: 16,
    lineHeight: 1.5,
    color: "#4B5563",
  },
  section: {},
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827",
    borderBottom: "2px solid #E5E7EB",
    paddingBottom: 2,
  },
  contactInfo: {},
  contactItem: {
    flexDirection: "row",
    marginBottom: 4,
    fontSize: 10,
    alignItems: "center",
  },
  contactLabel: {
    fontWeight: "bold",
    marginRight: 8,
    color: "#374151",
  },
  contactValue: {
    color: "#2563EB",
    textDecoration: "none",
  },
  workItem: {
    marginBottom: 12,
  },
  companyName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111827",
  },
  position: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#374151",
  },
  dateLocation: {
    fontSize: 10,
    marginBottom: 4,
    color: "#6B7280",
  },
  bulletPoint: {
    fontSize: 10,
    marginLeft: 12,
    marginBottom: 2,
    lineHeight: 1.4,
    color: "#4B5563",
  },
  abilityGroup: {
    marginBottom: 8,
  },
  abilityTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginRight: 8,
    color: "#374151",
  },
  abilityItems: {
    fontSize: 10,
    marginLeft: 12,
    lineHeight: 1.4,
    color: "#4B5563",
  },
});

export default function Generate({ resume }: { resume: Resume }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {resume.first_name} {resume.last_name} — {resume.title}
          </Text>
          <Text style={styles.description}>{resume.description}</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Name and Surname</Text>
              <Text>
                {resume.first_name} {resume.last_name}
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Mail Address</Text>
              <Text style={styles.contactValue}>
                {resume.personal_information.mail_address}
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Personal Web Site</Text>
              <Text style={styles.contactValue}>
                {resume.personal_information.personal_website}
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>LinkedIn</Text>
              <Text style={styles.contactValue}>
                {resume.personal_information.linkedin}
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>GitHub</Text>
              <Text style={styles.contactValue}>
                {resume.personal_information.github}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {resume.work_experience.map((work, index) => (
            <View key={index} style={styles.workItem}>
              <Text style={styles.position}>{work.position}</Text>
              <Text style={styles.companyName}>
                {work.company_name}, {work.start_date} - {work.end_date},{" "}
                {work.location}
              </Text>
              {work.description.map((desc, i) => (
                <Text key={i} style={styles.bulletPoint}>
                  • {desc}
                </Text>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {resume.education.map((edu, index) => (
            <View key={index} style={styles.workItem}>
              <Text style={styles.position}>{edu.degree}</Text>
              <Text style={styles.companyName}>
                {edu.school_name}, {edu.department}, {edu.start_date} –{" "}
                {edu.end_date}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Abilities & Tech Stack</Text>
          {resume.abilities.map((ability, index) => (
            <View key={index} style={styles.abilityGroup}>
              <Text>
                <Text style={styles.abilityTitle}>{ability.title}</Text>
                <Text style={styles.abilityItems}>
                  {ability.items.join(", ")}
                </Text>
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scholarships</Text>
          {resume.scholarships.map((scholarship, index) => (
            <View key={index} style={styles.workItem}>
              <Text style={styles.position}>{scholarship.title}</Text>
              <Text style={styles.companyName}>
                {scholarship.company_name}, {scholarship.start_date} -{" "}
                {scholarship.end_date}
              </Text>
              {scholarship.description.map((desc, i) => (
                <Text key={i} style={styles.bulletPoint}>
                  • {desc}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
