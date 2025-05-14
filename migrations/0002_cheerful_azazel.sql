ALTER TABLE "cafes" ADD COLUMN "rating" numeric;--> statement-breakpoint
ALTER TABLE "cafes" ADD COLUMN "lat" double precision;--> statement-breakpoint
ALTER TABLE "cafes" ADD COLUMN "lng" double precision;--> statement-breakpoint
ALTER TABLE "cafes" ADD COLUMN "address" text;--> statement-breakpoint
ALTER TABLE "cafes" ADD COLUMN "feature_image_url" text;