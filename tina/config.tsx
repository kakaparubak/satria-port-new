import { defineConfig } from "tinacms";
import React from "react";

const ImagePreview = (props: any) => {
  return (
    <div style={{ marginBottom: "1rem", flex: 1 }
    }>
      {
        props.input.value && (
          <img
            src={props.input.value}
            alt="Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              objectFit: "contain",
              marginBottom: "0.5rem",
              borderRadius: "0.375rem",
              border: "1px solid #e2e8f0",
              backgroundColor: "#1a1a1a"
            }}
          />
        )}
      <input
        {...props.input}
        type="text"
        placeholder="Paste image URL here..."
        style={{
          width: "100%",
          padding: "0.5rem",
          borderRadius: "0.375rem",
          border: "1px solid #e2e8f0",
          backgroundColor: "#fff",
          color: "#000"
        }}
      />
    </div>
  );
};

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "portfolio",
        label: "Portfolio Data",
        path: "content/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "roles",
            label: "Roles",
            list: true,
          },
          {
            type: "object",
            name: "aboutMe",
            label: "About Me",
            fields: [
              { type: "string", name: "name", label: "Name" },
              {
                type: "string",
                name: "image",
                label: "Image URL",
                ui: { component: ImagePreview },
              },
              {
                type: "string",
                name: "aboutme1",
                label: "About Me Part 1",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "aboutme2",
                label: "About Me Part 2",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "projectRows",
            label: "Grid Projects",
            list: true,
            ui: {
              itemProps: (item) => ({ label: `Row ${item?.id || ""}` }),
              defaultItem: () => ({
                id: "new-row",
                projects: [
                  {
                    name: "New Project",
                    img: "https://placehold.co/600x400/1a1a1a/ffffff?text=New+Project",
                  },
                  {
                    name: "New Project",
                    img: "https://placehold.co/600x400/1a1a1a/ffffff?text=New+Project",
                  },
                  {
                    name: "New Project",
                    img: "https://placehold.co/600x400/1a1a1a/ffffff?text=New+Project",
                  },
                ],
              }),
            },
            fields: [
              {
                type: "string",
                name: "id",
                label: "Row ID",
              },
              {
                type: "object",
                name: "projects",
                label: "Projects in Row",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name }),
                  defaultItem: () => ({
                    name: "New Project",
                    img: "https://placehold.co/600x400/1a1a1a/ffffff?text=New+Project",
                  }),
                },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  {
                    type: "string",
                    name: "img",
                    label: "Image URL",
                    ui: { component: ImagePreview },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "pastProjects",
            label: "Past Projects",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name }),
              defaultItem: () => ({
                name: "New Past Project",
                img: ["https://placehold.co/600x400/1a1a1a/ffffff?text=New+Past+Project"],
                myRole: "My Role",
                about: "About this project...",
                direction: "1",
              }),
            },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "img", label: "Image URLs", list: true },
              { type: "string", name: "myRole", label: "My Role" },
              {
                type: "string",
                name: "about",
                label: "About",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "direction",
                label: "Direction",
                options: [
                  { label: "Left", value: "1" },
                  { label: "Right", value: "-1" },
                ], ui: {
                  component: 'radio-group'
                },
              }
            ],
          },
          {
            type: "object",
            name: "moreProjects",
            label: "More Projects",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name }),
              defaultItem: () => ({
                name: "New Project",
                as: "Role",
              }),
            },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "as", label: "Role" },
            ],
          },
        ],
      },
    ],
  },
});
