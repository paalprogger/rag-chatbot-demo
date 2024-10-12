import { resources } from '@/lib/db/schema/resources'
import { index, integer, pgTable, text, vector } from 'drizzle-orm/pg-core'

export const embeddings = pgTable(
  'embeddings',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    resourceId: integer().references(() => resources.id, {
      onDelete: 'cascade',
    }),
    content: text().notNull(),
    embedding: vector({ dimensions: 1536 }).notNull(),
  },
  (table) => ({
    embeddingIndex: index('embeddingIndex').using(
      'hnsw',
      table.embedding.op('vector_cosine_ops'),
    ),
  }),
)
