import { defineType, defineField } from "sanity";

export default defineType({
  name: "calloutButton",
  title: "Callout Button",
  type: "object",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Rules", value: "rules" },
          { title: "Google Form for Project Submission", value: "projectSubmission" },
        ],
      }
    }),
    defineField({
      name: "googleFormUrl",
      title: "Google Form URL",
      type: "url",
      hidden: ({ parent }) => parent?.content !== "projectSubmission"
    }),
  ],
  preview: {
    select: {
      content: "content",
      url: "googleFormUrl"
    },
    prepare(selection) {
      const { content, url } = selection;
      return {
        title: "Callout Button",
        subtitle: content === "projectSubmission" ? `Google Form: ${url}` : "Rules"
      };
    },
  },
  components: {
    preview: (props) => {
      return (
        <div style={{
          backgroundColor: '#7B3AED',
          padding: '10px',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div>
            <div>{props.title}</div>
            <div style={{ opacity: 0.7, fontSize: "0.85em" }}>{props.subtitle}</div>
          </div>
        </div>
      )
    }
  }
});