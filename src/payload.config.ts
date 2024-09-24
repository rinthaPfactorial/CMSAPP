// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { s3Storage } from '@payloadcms/storage-s3'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { About } from './collections/About'
import { Services } from './collections/Services'
import Works from './collections/Works'
import Skills from './collections/Skills'
import Testimonials from './collections/Testimonial'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals:[Header,Footer,About],
  collections: [Users, Media,Pages,Services,Works,Skills,Testimonials],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        'media': 
       { 
        prefix:'media',
        // disablePayloadAccessControl:true
        },
      },
      bucket: process.env.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
          endpoint:process.env.S3_ENDPOINT,
          forcePathStyle:true
      },
    }),
  ],
})
