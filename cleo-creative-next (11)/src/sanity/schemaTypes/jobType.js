import {defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'jobId',
      title: 'Job ID',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Job Type',
      type: 'string',
      options: {
        list: ['Full-time', 'Part-time', 'Contract', 'Remote'],
      },
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'isOpen',
      title: 'Position Open?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'postedAt',
      title: 'Date Posted',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})