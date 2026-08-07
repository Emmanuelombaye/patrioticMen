import styles from "./TrustpilotBanner.module.css";

type TrustpilotBannerProps = {
  reviewsCount?: string;
  rating?: string;
  className?: string;
};

export function TrustpilotBanner({
  reviewsCount = "35,220",
  rating = "4.9",
  className = "",
}: TrustpilotBannerProps) {
  return (
    <div className={`${styles.trustpilotBar} ${className}`}>
      <div className={styles.inner}>
        <span className={styles.reviewText}>
          Check out our <strong>{reviewsCount}</strong> reviews
        </span>

        <div className={styles.starsRow} aria-label={`Rated ${rating} out of 5 stars on Trustpilot`}>
          <div className={styles.starBox}>★</div>
          <div className={styles.starBox}>★</div>
          <div className={styles.starBox}>★</div>
          <div className={styles.starBox}>★</div>
          <div className={`${styles.starBox} ${styles.starHalf}`}>★</div>
        </div>

        <div className={styles.brandGroup}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="#00b67a"
            className={styles.starLogo}
            aria-hidden
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className={styles.brandName}>Trustpilot</span>
        </div>
      </div>
    </div>
  );
}
